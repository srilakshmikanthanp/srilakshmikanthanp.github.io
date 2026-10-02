// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as feather from "feather-icons";

export interface IconProps {
  name: string;
  size?: number;
}

export default function Icon({ name, size = 20 }: IconProps) {
  const svg = feather.icons[name].toSvg({ width: size, height: size });
  return <span className="inline-flex" aria-hidden="true" dangerouslySetInnerHTML={{ __html: svg }} />;
}
