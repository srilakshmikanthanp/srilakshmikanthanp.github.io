// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as feather from "feather-icons";

/**
 * Converts the Svg Feather to Base 64
 *
 * @param name image name
 * @returns path
 */
export function getFeather(name: string) {
  // Svg Url String
  const svgUrlString = encodeURIComponent(feather.icons[name].toSvg({
    color: 'white'
  }));

  // Get back
  return `data:image/svg+xml;charset=utf-8, ${svgUrlString}`;
}
