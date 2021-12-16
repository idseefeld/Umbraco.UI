module.exports = {
  file: 'sketch.html',
  outDir: 'sketchextract',
  viewports: {
    Desktop: '1024x768',
    Mobile: '320x568',
  },
  puppeteerArgs: '--no-sandbox --disable-setuid-sandbox',
  puppeteerExecutablePath: 'google-chrome-unstable',
};
