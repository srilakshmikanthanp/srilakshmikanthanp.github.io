// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import type { IconType } from 'react-icons';
import { LuFacebook, LuGithub, LuInstagram, LuLinkedin, LuMail, LuTwitter } from 'react-icons/lu';

export const GITHUB_URL = 'https://github.com/srilakshmikanthanp';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/srilakshmikanthanp';
export const EMAIL_URL = 'mailto:srilakshmikanthanp@gmail.com';
export const TWITTER_URL = 'https://twitter.com/itsmekanth';
export const INSTAGRAM_URL = 'https://www.instagram.com/srilakshmikanthanp/';
export const FACEBOOK_URL = 'https://www.facebook.com/srilakshmikanthanp';

export const SOCIAL_LINKS: { name: string; icon: IconType; href: string }[] = [
  { name: 'GitHub', icon: LuGithub, href: GITHUB_URL },
  { name: 'LinkedIn', icon: LuLinkedin, href: LINKEDIN_URL },
  { name: 'Email', icon: LuMail, href: EMAIL_URL },
  { name: 'Twitter', icon: LuTwitter, href: TWITTER_URL },
  { name: 'Instagram', icon: LuInstagram, href: INSTAGRAM_URL },
  { name: 'Facebook', icon: LuFacebook, href: FACEBOOK_URL }
];
