import React from 'react'
import { HomeSectionAbout } from './HomeSectionAbout'
import { HomeSectionBusinessModel } from './HomeSectionBusinessModel'
import { HomeSectionMain } from './HomeSectionMain'
import { HomeSectionServices } from './HomeSectionServices'

export const Home = () => {
  return (
  <>
    <HomeSectionMain />
    <HomeSectionAbout />
    <HomeSectionServices/>
    <HomeSectionBusinessModel/>
  </>
  )
}
