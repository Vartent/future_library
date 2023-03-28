import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Input, Row, Col, Space } from 'antd'
import SearchBar from '@/ui/Search'
import Filter from '@/ui/Filter'
import Sorter from '@/ui/Sorter'
import BooksGrid from '@/ui/Books'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Space size={15} direction={"vertical"}>
          <Row justify={'center'} gutter={12}>
            <Col span={10}>
                <SearchBar/>
            </Col>
          </Row>
          <Row justify={'center'} gutter={12}>
            <Col span={5}>
              <Filter />
            </Col>
            <Col span={5}>
              <Sorter/>
            </Col>
          </Row>
          <Row justify={"center"}>
            <Col span={18}>
              <BooksGrid/>
              {/* <Books/> */}
            </Col>
          </Row>
        </Space>
      </main>
    </>
  )
}
