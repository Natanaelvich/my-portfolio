import { ReactNode } from 'react'

import { DevToLogo, GitHubLogo, Twitterlogo } from '@/components/Icons'

interface Social {
  id: string
  name: string
  url: string
  icon: ReactNode
}

const socials: Social[] = [
  {
    id: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/Natanaelvich',
    icon: <Twitterlogo color="#1DA1F2" />,
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/Natanaelvich',
    icon: <GitHubLogo />,
  },
  {
    id: 'dev.to',
    name: 'Dev.to',
    url: 'https://dev.to/natana',
    icon: <DevToLogo color="#f0f0f0" />,
  },
]

export default socials
