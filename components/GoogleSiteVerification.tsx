import Head from 'next/head'

interface GoogleSiteVerificationProps {
  verificationCode?: string
}

export function GoogleSiteVerification({ verificationCode }: GoogleSiteVerificationProps) {
  if (!verificationCode) return null

  return (
    <Head>
      <meta name="google-site-verification" content={verificationCode} />
    </Head>
  )
}

// Componente para múltiples verificaciones
export function SiteVerifications({
  google,
  bing,
  yandex,
  baidu
}: {
  google?: string
  bing?: string
  yandex?: string
  baidu?: string
}) {
  return (
    <Head>
      {google && <meta name="google-site-verification" content={google} />}
      {bing && <meta name="msvalidate.01" content={bing} />}
      {yandex && <meta name="yandex-verification" content={yandex} />}
      {baidu && <meta name="baidu-site-verification" content={baidu} />}
    </Head>
  )
}
