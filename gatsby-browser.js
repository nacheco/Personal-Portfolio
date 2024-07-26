/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import { Analytics } from '@vercel/analytics/react';

export const wrapPageElement = ({ element }) => (
  <>
    {element}
    <Analytics />
  </>
);
