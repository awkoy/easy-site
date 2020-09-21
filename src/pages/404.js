import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div className="not-found">
      <div className="container">
        <h1 className="not-found__title">Страница не найдена!</h1>
        <Link className="not-found__btn easy-btn easy-btn--reverse" to="/">Вернутся на Главную</Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
