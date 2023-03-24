import { v4 as uuid } from 'uuid'

const menuData = [
  {
    id: uuid(),
    name: 'about',
    menus: [
      { id: uuid(), name: 'faq', menus: [] },
      { id: uuid(), name: 'contact', menus: [] },
    ],
  },
  {
    id: uuid(),
    name: 'network',
    menus: [
      { id: uuid(), name: 'network1', menus: [] },
      { id: uuid(), name: 'network2', menus: [] },
    ],
  },
  {
    id: uuid(),
    name: 'home',
  },
  {
    id: uuid(),
    name: 'sign-in',
  },
]

export default menuData
