import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'
import Post from '../components/post'
import { TodoData, TodoDataListProps } from '../types/tododata'
import { GetTodos } from '../lib/todo_api'

export const getStaticProps: GetStaticProps = async (_context) => {
  // fetch list of posts
  const posts: TodoData[] = await GetTodos()
  return {
    props: {
      todoDataList: posts,
    },
  }
}

const IndexPage: NextPage<TodoDataListProps> = ({
  todoDataList,
}: TodoDataListProps) => {
  return (
    <main>
      <Head>
        <title>Home page</title>
      </Head>

      <h1>List of Discord Servers</h1>

      <section>
        {todoDataList.map((todoData: TodoData) => (
          <span key={`${todoData.name}-${todoData.id}`}>{todoData.name}</span>
        ))}
      </section>
    </main>
  )
}

export default IndexPage
