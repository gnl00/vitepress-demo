<script setup>
import { useData, useRoute } from 'vitepress'

console.log('global component')
// console.log(useData())
// console.log(useRoute())

const { page }  = useData()
console.log(page)
// 拿到 header，在右边渲染大纲
const headers = page.value.headers

const catalog = []

for(let header of headers) {
  if (header.level === 2) {
    // level 为 2 的结点直接 push
    catalog.push({
      ...header
    })
  } else {
    // 剩余的结点全部都是 level 为 3，找到对应的 parent
    const parent = catalog.slice(-1)[0]
    const child = {
      ...header
    }

    if (parent.children) {
      parent.children.push(child)
    } else {
      parent.children = [child]
    }
    // console.log(parent)
    catalog[catalog.length - 1] = parent
  }
}

const mouseEnter = evt => {
  console.log('mouseEnter')
}

const mouseLeave = evt => {
  console.log('mouseLeave')
}

</script>

<template>
  <div class="right-sidebar">
    <ul v-for="item in catalog" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
      <li>
        <a :href="'#' + item.slug">{{item.title}}</a>
        <ul v-if="item.children" v-for="child in item.children">
          <li>
            <a :href="'#' + child.slug">{{child.title}}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.right-sidebar {
  width: auto;
  height: auto;
  background-color: whitesmoke;
  margin-right: 5px;
  padding-right: 15px;
  position: fixed;
  right: 0;
  top: 25%;
  z-index: 9;
  border-radius: 5px;
  list-style: none;
}

.right-sidebar ul {
  list-style: none;
}
</style>