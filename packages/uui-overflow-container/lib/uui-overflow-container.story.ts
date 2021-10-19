import { html } from 'lit-html';
import './index';

export default {
  title: 'Compositions/Overflow Container',
  component: 'uui-overflow-container',
  id: 'uui-overflow-container'
};

export const Overview = () =>
  html`
    <uui-overflow-container>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Vestibulum in luctus lorem, in interdum est. Maecenas 
      hendrerit et velit eget pellentesque. Ut et gravida felis, 
      ac volutpat enim. Sed et risus vel lacus volutpat gravida. 
      Nam feugiat euismod nisi vitae tristique. Integer 
      bibendum, quam ut facilisis pharetra, sem mi pulvinar 
      felis, ac consequat dolor nunc quis ipsum. Nullam sit amet 
      blandit lorem, sed tincidunt neque.Vivamus sed eros 
      scelerisque, tristique neque non, ornare tortor. Nullam 
      tristique purus eget tortor imperdiet feugiat. Nulla id 
      tempor ante. Fusce mauris quam, ornare id elementum sed, 
      ultrices eget eros. Vestibulum commodo lectus risus, vitae 
      elementum urna tincidunt quis. Sed non tortor vel risus 
      fermentum rhoncus et quis quam. Etiam posuere ullamcorper 
      ipsum, et ultrices risus viverra at. Proin interdum, lectus 
      fringilla auctor porta, lacus dolor sodales velit, nec 
      elementum odio lectus ac tortor. Phasellus dolor est, 
      finibus nec vehicula tincidunt, commodo non turpis.
    </uui-overflow-container>
  `;
