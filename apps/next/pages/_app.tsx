import '@monorepo-boilerplate/ui/src/styles/index.css'
import React from 'react'
import App from 'next/app'
import Head from 'next/head'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <title>Monorepo boilerplate - NextJS App | Dwarves Foundation</title>
          <meta
            property="og:title"
            content="Monorepo boilerplate - NextJS App | Dwarves Foundation"
          />
          <meta name="twitter:site" content="@dwarvesf" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="description"
            content="Opinionated React template for building web applications at scale."
          />
          <meta
            property="og:description"
            content="Opinionated React template for building web applications at scale."
          />
          <meta property="og:image" content="/thumbnail.jpeg" />
          <meta name="twitter:image" content="/thumbnail.jpeg" />
        </Head>
        {/**
         * Ignore this for now due to multiple react types detected
         */}
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </>
    )
  }
}
export default MyApp
