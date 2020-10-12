import React from 'react';
import PostItem from './PostItem';

class PostList extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Matuta Jorge',
          avatar: 'https://i.pravatar.cc/150?img=1',
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a DLine está contratando?',
        comments: [
          {
            id: 2,
            author: {
              name: 'José Gonçalves',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
            },
            date: '10 Out 2020',
            content:
              'A DLine está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca nos nossos treinamentos, inclusive 90% do nosso time de devs é composto por alunos do Treinamento. ',
          },
        ],
      },
      {
        id: 3,
        author: {
          name: 'Matuta Jorge',
          avatar: 'https://i.pravatar.cc/150?img=8',
        },
        date: '10 Out 2020',
        content:
          'Lorem ipsum sit dolor amet consectury amet sit dolor amet lorem sit sdl dolor amet sc consecturty dam dmea te ao fethus and axios dev for contract to my personal work',
        comments: [
          {
            id: 4,
            author: {
              name: 'Ernesto Salias',
              avatar: 'https://i.pravatar.cc/150?img=5',
            },
            date: '11 Out 2020',
            content:
              'Também estou fazendo o Treinamento e estou adorando! Estou na terceira fase sobre React e já tenho minha aplicação construída!',
          },
          {
            id: 5,
            author: {
              name: 'Paulino Passil',
              avatar: 'https://i.pravatar.cc/150?img=11',
            },
            date: '14 Out 2020',
            content:
              'Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Treinamento, dizem que os devs saem de lá com super poderes',
          },
        ],
      },
      {
        id: 6,
        author: {
          name: 'Osvaldo de Sousa',
          avatar: 'https://i.pravatar.cc/150?img=51',
        },
        date: '12 Out 2020',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe labore voluptates corrupti alias sapiente tenetur perferendis doloremque et, consequuntur minus explicabo assumenda mollitia error consequatur, a facere at nemo magni.',
        comments: [
          {
            id: 4,
            author: {
              name: 'Lúcio José',
              avatar: 'https://i.pravatar.cc/150?img=5',
            },
            date: '12 Out 2020',
            content:
              'Também Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe labore voluptates corrupti alias sapiente tenetur perferendis ',
          },
          {
            id: 5,
            author: {
              name: 'Mário Varela',
              avatar: 'https://i.pravatar.cc/150?img=11',
            },
            date: '13 Out 2020',
            content:
              'Que maaaaaassa! Estou pensando em me inscrever no próximo Treinamento da DLine Code, Muito massa!',
          },
        ],
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <>
        <div className="postList">
          {posts.map((post, index) => (
            <PostItem key={index} {...post} />
          ))}
        </div>
      </>
    );
  }
}

export default PostList;
