import { ready } from 'https://lsong.org/scripts/dom.js';
import { Sidebar } from 'https://lsong.org/scripts/components/sidebar.js';
import { h, render, useState, useEffect } from 'https://lsong.org/scripts/react/index.js';

const App = () => {
  const [] = useState();
  useEffect(() => {
    console.log('App is ready');
  }, []);
  return [
    h('h2', null, "App"),
    h('ul', null, [
      h('li', null, "Demo"),
      h('li', null, "Demo"),
      h('li', null, "Demo"),
      h('li', null, "Demo"),
      h('li', null, "Demo"),
      h('li', null, "Demo"),
      h('li', null, "Demo"),
      h('li', null, "Demo"),
      h('li', null, "Demo"),
      h('li', null, "Demo"),
      h('li', null, "Demo"),
      h('li', null, "Demo"),
      h('li', null, "Demo"),
      h('li', null, "Demo"),
      h('li', null, "Demo"),
      h('li', null, "Demo"),
      h('li', null, "Demo"),
      h('li', null, "Demo"),
      h('li', null, "Demo"),
      h('li', null, "Demo"),
      h('li', null, "Demo"),
      h('li', null, "Demo"),
      h('li', null, "Demo"),
      h('li', null, "Demo"),
      h('li', null, "Demo"),
      h('li', null, "Demo"),
      h('li', null, "Demo"),
      h('li', null, "Demo"),
      h('li', null, "Demo"),
      h('li', null, "Demo"),
    ])
  ]
}

ready(() => {
  const app = document.getElementById('app');
  render(h(App), app);
});

// 使用示例:
document.addEventListener('DOMContentLoaded', () => {
  const sidebarElement = document.querySelector('.sidebar');
  const sidebar = new Sidebar(sidebarElement);

  // 控制侧边栏状态的逻辑
  const toggleButton = document.querySelector('button');
  const content = document.querySelector('.content');
  let sidebarState = 0; // 0: expanded, 1: mini, 2: hidden

  toggleButton.addEventListener('click', () => {
    sidebarState = (sidebarState + 1) % 3;
    const states = ['expanded', 'mini', 'hidden'];
    sidebar.setState(states[sidebarState]);
  });

  // 示例: 添加新的菜单项
  sidebar.addMenuItem({
    href: '#',
    iconClass: 'fas fa-chart-bar',
    text: '数据分析',
    submenu: [
      { href: '#', iconClass: 'fas fa-chart-line', text: '趋势分析' },
      { href: '#', iconClass: 'fas fa-chart-pie', text: '饼图分析' }
    ]
  });
});