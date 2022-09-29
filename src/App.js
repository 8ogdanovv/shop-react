import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: './img/GUEST_3e35d03c-8f23-4740-a866-1ef8280d441f.jpeg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ducimus recusandae quasi quam nemo magnam voluptatum quod eligendi repellendus veritatis vero tempora soluta libero fuga eum id maiores, corrupti voluptatem.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: './img/stol-tm-76-120x80-blanko-mramor-cherniy-23480877.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ducimus recusandae quasi quam nemo magnam voluptatum quod eligendi repellendus veritatis vero tempora soluta libero fuga eum id maiores, corrupti voluptatem.',
          category: 'tables',
          price: '129.99'
        },
        {
          id: 3,
          title: 'Диван',
          img: './img/imageService.jpeg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ducimus recusandae quasi quam nemo magnam voluptatum quod eligendi repellendus veritatis vero tempora soluta libero fuga eum id maiores, corrupti voluptatem.',
          category: 'sofa',
          price: '269.99'
        },
        {
          id: 4,
          title: 'Лампа',
          img: './img/29282178-6b48-487c-b41c-d2b1e67577aa.4a2d626e4d4c5149447d09f12315e089.webp',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ducimus recusandae quasi quam nemo magnam voluptatum quod eligendi repellendus veritatis vero tempora soluta libero fuga eum id maiores, corrupti voluptatem.',
          category: 'ligth',
          price: '59.99'
        },
        {
          id: 5,
          title: 'Стул белый',
          img: './img/stul-milan-beliy-44382931.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ducimus recusandae quasi quam nemo magnam voluptatum quod eligendi repellendus veritatis vero tempora soluta libero fuga eum id maiores, corrupti voluptatem.',
          category: 'chairs',
          price: '49.99'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  render() {
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}></Header>
      <Categories chooseCategory={this.chooseCategory} />
      <Items items={this.state.currentItems}
      onAdd={this.addToOrder}
      onShowItem={this.onShowItem}
      ></Items>

      {this.state.showFullItem && <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
      item={this.state.fullItem} />}

      <Footer></Footer>
    </div>
  )
  }

  onShowItem(item) {
    this.setState({
      fullItem: item
    })
    this.setState({
      showFullItem: !this.state.showFullItem
    })
  }

  chooseCategory(category) {

    if (category === 'all') {
      this.setState({
        currentItems: this.state.items
      })
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
      })
      if (!isInArray)
        this.setState({ orders: [...this.state.orders, item] })
  }

}

export default App;
