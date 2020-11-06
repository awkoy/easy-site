import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div className="not-found">
      <div className="container">
        <h1 className="not-found__title">Сторiнку не знайдено!</h1>
        <Link className="not-found__btn easy-btn easy-btn--reverse" to="/">Повернутися на головну</Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
