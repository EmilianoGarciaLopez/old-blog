import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
  return (
    <svg viewBox="0 0 684.98 446.4" height="40px"
    xmlns="http://www.w3.org/2000/svg">
    <path fill={fill} d="m570.23 367.12h-39.75-17.26v-159.82h-69.14v230.85h239.4v-71.03z" stroke={fill} stroke-miterlimit="10" stroke-width="3"/>
    <path fill={fill} d="m367.72 270.9h57v43.8q0 17.42-5.4 30.3a68.13 68.13 0 0 1 -13.5 21.3 56.32 56.32 0 0 1 -17.4 12.6q-9.3 4.2-17.1 4.2-18.6 0-30.3-11.7t-18-33.6q-6.3-21.9-8.7-53.1t-2.4-69.6q0-80.4 13.8-115.2t45-34.8q13.2 0 22.5 6.9a56 56 0 0 1 15.3 17.4 80 80 0 0 1 8.7 23.1 117.24 117.24 0 0 1 2.7 24.6h82.8q0-65.38-31.2-100.5t-102-35.1q-41.4 0-69 13.8t-44.4 41.1q-16.8 27.32-23.7 68.1t-6.9 94.8q0 55.8 4.8 98.1t18.9 71.1q14.1 28.8 39 42.6t64.5 13.8q30.6 0 52.5-10.5t37.5-35.7h1.2v39.6h63.6v-231h-139.8z" stroke={fill} stroke-width="3"/>
    <path fill={fill} d="m244.44 388.5a166 166 0 0 1 -8.75-21.9h-149.29v-115.2h132.91l-19.22-70.8h-113.69v-100.8h86.33l-19.21-70.8h-153.52v428.4h269.79l-5.65-20.83a103.14 103.14 0 0 1 -19.7-28.07z"/>
    </svg>
  );
}