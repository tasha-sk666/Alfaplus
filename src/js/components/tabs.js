import GraphTabs from 'graph-tabs';

document.addEventListener("DOMContentLoaded", () => {
  const tabItem = document.querySelector('.tabs')

  if(tabItem) {
    const tabs = new GraphTabs('price-tab');
  }
});
