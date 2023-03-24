import { useLocation } from 'react-router-dom'

export default function Article() {
  // const path = useLocation().pathname.split('/')[1];
  const path = useLocation().pathname
  console.log('article, path: ', path)
  // const selectedMenu = menus.find(m=> m.name === path)

  return <h1>Article:{path}</h1>
}
