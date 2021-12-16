#!/usr/bin/env node

import { rollup } from 'rollup';
import path from 'path';
import mkdirpAsync from 'mkdirp';

import { writeFile } from 'fs';
import { promisify } from 'es6-promisify';
const writeFileAsync = promisify(writeFile);
//import {nodeTreeToSketchPage} from '@brainly/html-sketchapp';
import rollupPluginsNodeResolve from 'rollup-plugin-node-resolve';
import rollupPluginsCommonJS from 'rollup-plugin-commonjs';

import puppeteer from 'puppeteer';

(async () => {
  //const browser = await puppeteer.launch();
  const browser = await puppeteer.launch(
    process.env.DEBUG
      ? {
          headless: false,
          slowMo: 100,
        }
      : {}
  );

  const page = await browser.newPage();

  const url = `file://${path.join(process.cwd(), './sketch.html')}`;
  await page.goto(url, { waitUntil: 'networkidle2' });

  const bundle = await rollup({
    //input: path.resolve(__dirname, '../script/generateAlmostSketch.js'),
    input: './scripts/generateAlmostSketch.js',
    plugins: [rollupPluginsNodeResolve(), rollupPluginsCommonJS()],
  });

  console.log(bundle);
  console.log('###');

  const { output } = await bundle.generate({
    format: 'iife',
    name: 'generateAlmostSketch',
  });

  console.log(output[0].code);
  console.log('### 2');

  await page.addScriptTag({ content: output[0].code });

  console.log('### 3 ');
  await page.screenshot({ path: 'example.png' });

  console.log('### 4 ');

  await page.evaluate(
    'generateAlmostSketch.setupSymbols({ name: "html-sketchapp symbols" })'
  );

  await page.evaluate('generateAlmostSketch.snapshotColorStyles()');

  const viewports = { Desktop: '1024x768' };
  const hasViewports = Object.keys(viewports).length > 1;
  for (const viewportName in viewports) {
    if (viewports.hasOwnProperty(viewportName)) {
      const viewport = viewports[viewportName];
      const [size, scale] = viewport.split('@');
      const [width, height] = size.split('x').map(x => parseInt(x, 10));
      const deviceScaleFactor =
        typeof scale === 'undefined' ? 1 : parseFloat(scale);
      await page.setViewport({ width, height, deviceScaleFactor });
      await page.evaluate(
        `generateAlmostSketch.snapshotTextStyles({ suffix: "${
          hasViewports ? `/${viewportName}` : ''
        }" })`
      );
      await page.evaluate(
        `generateAlmostSketch.snapshotSymbols({ suffix: "${
          hasViewports ? `/${viewportName}` : ''
        }" })`
      );
    }
  }

  const asketchDocumentJSON = await page.evaluate(
    'generateAlmostSketch.getDocumentJSON()'
  );
  const asketchPageJSON = await page.evaluate(
    'generateAlmostSketch.getPageJSON()'
  );

  console.log(asketchDocumentJSON);
  console.log('asketchPageJSON');
  console.log(asketchPageJSON);

  const outputPath = path.resolve(process.cwd(), 'sketchOutput');
  console.log('### 7 ');
  console.log(outputPath);
  await mkdirpAsync(outputPath);

  console.log('### 8 ');

  const outputPagePath = path.join(outputPath, 'page.asketch.json');
  const outputDocumentPath = path.join(outputPath, 'document.asketch.json');

  console.log('### 9 ');

  await Promise.all([
    writeFileAsync(outputPagePath, asketchPageJSON),
    writeFileAsync(outputDocumentPath, asketchDocumentJSON),
  ]);

  console.log('### 10 ');
  /*
  //const bodyInnerHTML = await page.evaluate(() => document.body.innerHTML);
  //const body = await page.evaluate(() => document.body);
  const body = await page.evaluate(() => document.body);

  console.log(body);

  // nodeTreeToSketchPage will traverse the DOM tree, call nodeToSketchLayers on each DOM node, and crate a whole Sketch page for you
  const sketchPage = nodeTreeToSketchPage(body);

  sketchPage.setName('DOM tree to a Sketch page');

  // our mypage.asketch.json file that can be imported via Sketch plugin
  console.log(sketchPage.toJSON());
  */

  await browser.close();
})();
