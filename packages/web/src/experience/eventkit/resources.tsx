import * as React from 'react'
import { View } from 'react-native'
import { brandStyles } from 'src/experience/common/constants'
import Page, { ROOT } from 'src/experience/eventkit/Page'
import Markdown from 'src/experience/Markdown'
import { NameSpaces, useTranslation } from 'src/i18n'
import { hashNav } from 'src/shared/menu-items'
import { standardStyles } from 'src/styles'

const sections = [
  hashNav.eventsResources.overview,
  hashNav.eventsResources.quickTips,
  hashNav.eventsResources.planning,
  hashNav.eventsResources.social,
].map((id) => {
  return {
    id,
    children: <Section content={require(`src/experience/eventkit/content/resources/${id}.md`)} />,
  }
})

export default function Resources() {
  const { t } = useTranslation(NameSpaces.eventskit)
  return (
    <>
      <Page
        title="Home"
        path={ROOT}
        metaDescription={t('flavor.introduction')}
        sections={sections}
      />
    </>
  )
}

function Section({ content }) {
  return (
    <View style={[brandStyles.gap, standardStyles.elementalMarginBottom]}>
      <Markdown source={content} />
    </View>
  )
}
