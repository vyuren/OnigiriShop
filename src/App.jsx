import './App.css'
import Navbar from './components/Navbar'
import Board from './components/Board'
import Credits from './components/Credits'
import Produto from './components/Produto'
import Sobre from './components/Sobre'
import Contato from './components/Contato'
import Inicio from './components/Inicio'

import sushiPlaceholder from './imgs/images.png'
import futomakiImage from './imgs/produtos/futomaki.jpeg'
import hotrollImage from './imgs/produtos/hotroll.jpeg'
import temakiImage from './imgs/produtos/images.jpeg'
import joeImage from './imgs/produtos/joe.jpeg'
import nigiriImage from './imgs/produtos/nigiri.jpg'
import onigiriImage from './imgs/produtos/onigiri.jpeg'
import uramakiImage from './imgs/produtos/uramaki.jpeg'
import chirashiImage from './imgs/produtos/chirashi.jpeg'
import gunkanImage from './imgs/produtos/gunkan.jpeg'
import hossomakiImage from './imgs/produtos/hossomaki.jpg'
import inarizushiImage from './imgs/produtos/inarizushi.jpeg'
import oshizushiImage from './imgs/produtos/oshizuki.jpeg'
import philadelphiaImage from './imgs/produtos/philadelphia.jpeg'
import takoyakiImage from './imgs/produtos/takoyaki.jpg'


function App() {

  return (
    <>
      <Navbar></Navbar><br />
      <section id='inicio_'>
        <Board>
          <Inicio/>
        </Board><br/>
      </section>
      <section id='sobreNos_'>
        <div className='sobreNos_'>
          <Board>
            <Sobre
              img={sushiPlaceholder}
            />
          </Board>
        </div>
      </section>

      <br />
      <section id='produtos_'>
        <Board>
          <Produto
            img={futomakiImage}
            nome="Futomaki"
            preco="R$ 2,50"
            descricao="Rolinhos grossos com arroz, peixe e vegetais envoltos em nori"
          />
          <Produto
            img={hotrollImage}
            nome="Hot Roll"
            preco="R$ 1,50"
            descricao="Sushi empanado e frito, crocante por fora e macio por dentro"
          />
          <Produto
            img={temakiImage}
            nome="Temaki"
            preco="R$ 5,00"
            descricao="Cone de alga recheado com arroz e ingredientes frescos"
          />
          <Produto
            img={joeImage}
            nome="Joe/Djô"
            preco="R$ 2,00"
            descricao="Bolinho de arroz coberto com uma porção de recheio especial"
          />
          <Produto
            img={nigiriImage}
            nome="Nigiri"
            preco="R$ 2,25"
            descricao="Arroz moldado à mão coberto com fatia de peixe fresco"
          />
          <Produto
            img={onigiriImage}
            nome="Onigiri"
            preco="R$ 3,75"
            descricao="Bolinho de arroz triangular com recheio de sua preferência"
          />
          <Produto
            img={uramakiImage}
            nome="Uramaki"
            preco="R$ 2,30"
            descricao="Rolo invertido com arroz por fora e recheio variado"
          />
          <Produto
            img={chirashiImage}
            nome="Chirashi"
            preco="R$ 12,00"
            descricao="Bowl de arroz coberto com peixes e ingredientes frescos"
          />
          <Produto
            img={gunkanImage}
            nome="Gunkan"
            preco="R$ 2,50"
            descricao="Bolinho de arroz envolvido em algas com recheio variado"
          />
          <Produto
            img={hossomakiImage}
            nome="Hossomaki"
            preco="R$ 1,75"
            descricao="Enrolado fino de arroz, nori e recheio"
          />
          <Produto
            img={inarizushiImage}
            nome="Inarizushi"
            preco="R$ 2,00"
            descricao="Bolinho de arroz envolto em tofu macio"
          />
          <Produto
            img={oshizushiImage}
            nome="Oshizushi"
            preco="R$ 3,00"
            descricao="Sushi prensado em formato compacto"
          />
          <Produto
            img={philadelphiaImage}
            nome="Philadelphia"
            preco="R$ 2,75"
            descricao="Uramaki com salmão e cream cheese"
          />
          <Produto
            img={takoyakiImage}
            nome="Takoyaki"
            preco="R$ 4,00"
            descricao="Bolinho japonês crocante com recheio de polvo"
          />
        </Board>
      </section>
      <br />
      <section id='contato_'>
        <Board>
          <Contato />
        </Board>
      </section>

      <Credits></Credits>
    </>
  )
}

export default App
