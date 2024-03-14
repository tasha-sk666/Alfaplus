import GraphTabs from 'graph-tabs';

const tabs = new GraphTabs('price-tab',
  {
    isChanged: (tabs) => {
      console.log(tabs);
    }
  }
);
