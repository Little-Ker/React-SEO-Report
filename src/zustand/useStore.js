import create from 'zustand'

const useStore = create(set => ({
  // 頁面 index
  pageIndex: 0,
  setPageIndex: value => set((state) => {
    console.log('state', state)
    return { pageIndex: value }}),
  // 目錄 index
  typeIndex: 0,
  setTypeIndex: value => set(state => ({ typeIndex: value })),
}))

export default useStore