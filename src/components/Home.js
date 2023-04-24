import {AiFillGithub, AiFillTwitterCircle} from 'react-icons/ai'
import {Link} from 'react-router-dom';
import About from './About';
import { useRef } from 'react';

const Home = ({myWorkRef}) => {
  

  const scrollToMyWork = () => {
    myWorkRef.current.scrollIntoView({ behavior:'smooth' })
  }
  
  return (
    <main>
      <div className='container'>
        <h1>McCarthy Aaron</h1>
        <h1>Full Stack Developer</h1>
        <p>I am a software enginner specialising in web development. I am proficient in React, Angular for the front end and Node, Django for the back end.
        </p>
        <div>
          <Link to='https://github.com/mccarthyaaron'><AiFillGithub /></Link>
          <Link><AiFillTwitterCircle /></Link>
          <div>
          <button onClick={scrollToMyWork}>my WOrk</button>
          <Link to='#about'>Check Out my Work</Link>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex optio vitae voluptate! Magni corrupti nulla quam. Quia quo voluptatibus est a porro, dolorum suscipit aperiam exercitationem nihil aut, harum culpa! Et ipsam libero voluptatem doloribus recusandae consectetur nesciunt laudantium vero! Commodi in quo non, ratione odio soluta exercitationem consequatur, aperiam voluptates est animi mollitia voluptas ad laboriosam, eveniet dolore dignissimos expedita? Quo voluptas quod cupiditate excepturi repudiandae consectetur odio fugiat, dolores repellendus suscipit totam tempora praesentium hic quam sed quae maxime soluta vero molestias perferendis! Sit perferendis molestiae provident maiores, aperiam libero numquam, eligendi ducimus similique quam animi omnis, hic corrupti? Dolore ipsa iusto eos assumenda ipsum suscipit laudantium consequatur soluta velit! Rem corporis dolorum laborum sunt repellat! Saepe asperiores temporibus facilis aut corrupti omnis perspiciatis possimus rem a ratione fugit, voluptatibus amet non iusto! Assumenda, dolore facilis? Dolorem nam eum quasi ex voluptatum doloribus ab, itaque labore modi ratione commodi corrupti assumenda dolor officiis consequuntur atque optio consectetur veritatis perspiciatis similique nostrum! Ea recusandae maxime voluptatibus illo aliquid quos, qui corporis consectetur quis, tempore sequi enim consequatur, dolores perferendis a atque dolorum cupiditate! Quod tempora reiciendis hic consequuntur molestiae doloremque, quisquam optio voluptatibus, repellat quam nostrum eum nobis nemo, saepe dolorem! Vero natus velit deleniti illum aliquid! Necessitatibus neque rem, alias qui molestias possimus. Temporibus quidem quia saepe itaque non expedita dolorem aperiam eius minima incidunt aspernatur veritatis ducimus voluptate, odit quibusdam, vitae doloribus culpa! Sint optio magni voluptate vel eveniet sapiente numquam fuga enim necessitatibus praesentium quam sit, id aut rem, sequi rerum ipsa distinctio reiciendis perspiciatis libero. Excepturi aut nostrum repellat nulla corrupti suscipit, id tempora in. Vel recusandae illo exercitationem expedita, officiis, possimus ad nisi necessitatibus ut atque impedit doloribus adipisci quae nulla dicta nemo repellat dolor minima. Doloremque corrupti esse optio ex, non labore officia aliquam velit voluptas iure tempora excepturi quaerat repellendus at cupiditate corporis, eligendi a. Nemo minus libero sint architecto recusandae labore temporibus error tempora dolore fuga possimus harum eum tenetur porro quia dolor quae velit, tempore distinctio accusamus inventore vero eaque necessitatibus! Inventore quae, a dolores, assumenda eum sapiente nostrum numquam necessitatibus accusantium possimus nam tempora quas? Necessitatibus, quas adipisci eveniet ullam enim cum quia aspernatur nobis impedit cumque voluptatem magnam veniam corrupti fugit beatae blanditiis cupiditate fuga asperiores tempora illo sunt. Odio debitis ad earum sint, numquam alias laboriosam fugit cumque iusto, culpa similique sit dolorem quaerat voluptate impedit nemo non, beatae sapiente. Quis repellendus non officia amet exercitationem vero porro molestiae qui deserunt corporis soluta asperiores aperiam dolorem eius velit et voluptatum, quos sit. Perspiciatis itaque accusantium ad porro velit corrupti temporibus quo delectus unde. Exercitationem fugit ipsam vel reprehenderit error laudantium. Excepturi recusandae tempora repellat incidunt voluptas quas dicta rerum, voluptatum atque autem, delectus provident repudiandae vel! Nulla, eos. Non doloremque incidunt et reprehenderit aspernatur dignissimos laborum repellendus illo cumque ad quae, animi officia nulla, eum deserunt sapiente unde accusantium, dolorem perspiciatis illum ea. Obcaecati placeat, magni suscipit alias vero quos quam quod consectetur mollitia vel iste rem distinctio eius, ab qui ipsa, ad iusto ex tenetur maiores. Maxime nobis dolores, ut iure numquam porro minus dignissimos eos explicabo harum voluptas neque at nostrum veritatis vero molestiae. Minus nobis doloribus provident recusandae culpa! Temporibus ad sapiente tempora est, earum cupiditate maiores debitis eius laboriosam totam fugiat ipsam fuga facilis fugit dolores autem velit! Tenetur sunt nihil rem voluptates ipsum quisquam quia, architecto deserunt adipisci incidunt, maiores quasi, inventore culpa? Quae sunt laudantium nisi autem fugiat corrupti, facilis inventore sit optio soluta neque praesentium dolorum at eligendi natus atque non? Non quisquam repellat doloribus id harum tempora consequatur ab sapiente ea suscipit optio modi eaque explicabo, temporibus tempore cum accusamus veritatis excepturi! Reprehenderit suscipit sunt voluptatum! Quae sit harum, earum in quia minus vel distinctio quidem maiores temporibus? Dolores distinctio, expedita, illo quibusdam a vero pariatur sapiente laborum ex quidem nemo hic ipsam, repudiandae nesciunt. Consequatur dolore corrupti, repudiandae eligendi reiciendis quisquam id ipsum vero nesciunt ratione! Molestiae perspiciatis in non corporis tempore doloremque atque earum nam similique odit harum blanditiis excepturi, obcaecati iste id dolorem dolore fuga repellendus dicta totam! Tempore ut perferendis atque suscipit perspiciatis, debitis hic repudiandae quis. Ea ut asperiores dolorem vero nihil incidunt quaerat accusamus, quia quos dolor nisi, beatae, praesentium tenetur quam odit dignissimos explicabo maxime. Necessitatibus repellendus sunt ratione rerum provident facilis soluta et fugiat consectetur maiores vero, animi sed mollitia ipsum assumenda repudiandae reiciendis autem aut quia nobis blanditiis ipsa officiis asperiores quae! Officia minus praesentium similique magnam aliquid qui eius distinctio saepe, iusto expedita nulla corporis incidunt quaerat soluta aperiam sunt reiciendis temporibus. Voluptatem, nam sit blanditiis explicabo id quae omnis praesentium nihil ab quo nulla necessitatibus sed saepe quidem dignissimos vel distinctio eius porro? Quia sequi non dolorem voluptate eum nostrum laborum fugiat facere, eligendi cumque perferendis reiciendis unde consequuntur maxime, facilis corporis rem? Itaque quisquam sit molestiae eligendi aspernatur reiciendis voluptas aliquam eius dolor, esse labore quia iusto non ipsam soluta similique et perferendis temporibus, officia veritatis voluptatem! Quae quidem harum quos sapiente similique laudantium doloremque esse deleniti, numquam recusandae. Nobis reprehenderit libero consequatur? Provident blanditiis, temporibus dolorem quos ipsam ipsum aliquam suscipit nostrum quod molestiae quo maxime ea nam harum reprehenderit necessitatibus natus excepturi sint animi quidem quas voluptatum cum deserunt. Amet et qui odio tenetur iure consequatur ullam vel recusandae, minus repellendus, sequi ipsum nemo deserunt sunt! Cum alias dignissimos tempora voluptates blanditiis rem repudiandae unde delectus doloribus perspiciatis quaerat, nobis incidunt nemo ad nam sequi, eaque quidem debitis aliquid. Quisquam vel ipsum in architecto aliquid deserunt suscipit dignissimos quos fugit earum impedit corrupti ad praesentium recusandae accusantium, illo id harum. Voluptatibus aliquid atque dolore obcaecati, rem et voluptas facere architecto labore consectetur quis ab accusamus quaerat reprehenderit error. Reiciendis delectus est qui assumenda explicabo aliquam, cumque magnam recusandae aut dolorum hic harum, atque veniam doloremque repellat laboriosam eveniet quia illum quae odio architecto. Alias soluta enim, ut itaque eveniet et quod aperiam ducimus error accusantium autem dolor in accusamus, laudantium qui dolorem voluptatem blanditiis!

          
          <About myWorkRef={myWorkRef}/>
          </div>

        
    
        
          
        </div>
      </div>
    
    </main>
    
  )
}

export default Home