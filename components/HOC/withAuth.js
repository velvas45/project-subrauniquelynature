import React, {useState,useEffect} from 'react'
import Link from 'next/link';
import Layout from '../../layouts/Layout';
import Head from 'next/head'

const withAuth = WrappedComponent => (props) => {
  const [token,setToken] = useState(null)
  const [loading,setLoading] = useState(true)

  useEffect(() => {
      const token = window.sessionStorage.getItem('token')
      if(token){
        setLoading(false)
        setToken(token)
      } else {
          setLoading(false)
      }
  }, [])
  

  return (!token ?
    <NeedLogin loading={loading}/>
    :
    <WrappedComponent {...props} />
  )
}

const NeedLogin = ({loading}) => {
    return loading ? "" : (
        <>
            <Head>
                <title> Tidak ada akses · SUBRA UNIQELY NATURE</title>
            </Head>
            <section className="py-5 text-center" style={{background:"#f5f5f5", display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
            <div className="container">
                <h1 className="fs-60">Anda Tidak Terdaftar Sebagai Admin<span className="text-primary">.</span></h1>
                <p>Anda harus login terlebih dahulu untuk mengakses halaman ini. <Link href="/admin"><a>Sign in</a></Link> here</p>
            </div>
            </section>
        </>
    )
}

export default withAuth