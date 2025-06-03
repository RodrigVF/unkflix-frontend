import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/logged/header/header.component';
import { CardComponent } from '../../../components/logged/card/card.component';
import { Movie } from '../../../interfaces/movie.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeaderComponent, CardComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  movies: Movie[] = [
    {
      title: 'O Poderoso Chefão',
      description: 'Don Corleone, chefe da máfia, precisa passar o legado para seu filho Michael, que reluta em assumir os negócios da família.',
      duration: '1:30h',
      age: 'Somente +18',
      approval: '67%',
      provider: 'claro',
      providerLabel: 'Claro tv',
      isTop10: true
    },
    {
      title: 'Casablanca',
      description: 'Durante a Segunda Guerra Mundial, um exilado americano precisa escolher entre o amor da sua vida e ajudar um líder da resistência.',
      duration: '1:30h',
      age: 'Somente +18',
      approval: '67%',
      provider: 'netflix',
      providerLabel: 'Netflix',
      isTop10: true
    },
    {
      title: 'Cidadão Kane',
      description: 'A história de Charles Foster Kane, um magnata da imprensa que morre dizendo "Rosebud", despertando um jornalista a investigar sua vida.',
      duration: '1:30h',
      age: 'Somente +18',
      approval: '67%',
      provider: 'claro',
      providerLabel: 'Claro tv',
      isTop10: true
    },
    {
      title: 'Oppenheimer',
      description: 'A história real do cientista que liderou a criação da bomba atômica, mudando o curso da humanidade para sempre.',
      duration: '1:30h',
      age: 'Somente +18',
      approval: '67%',
      provider: 'ittv',
      providerLabel: 'tv+',
      isTop10: true
    },
    {
      title: 'Coringa 2',
      description: 'Continuação da história de Arthur Fleck, explorando sua transformação completa no vilão Coringa.',
      duration: '1:30h',
      age: 'Somente +18',
      approval: '67%',
      provider: 'prime',
      providerLabel: 'prime video',
      isTop10: false
    },
    {
      title: 'Duna: Parte 2',
      description: 'Paul Atreides lidera uma rebelião contra o Imperador, buscando vingança e equilíbrio para o destino do universo ao lado de Chani e dos Fremen.',
      duration: '1:30h',
      age: 'Somente +18',
      approval: '67%',
      provider: 'ittv',
      providerLabel: 'tv+',
      isTop10: false
    },
    {
      title: 'The Batman',
      description: 'Bruce Wayne investiga crimes misteriosos cometidos pelo Charada enquanto descobre segredos sombrios sobre Gotham.',
      duration: '1:30h',
      age: 'Somente +18',
      approval: '67%',
      provider: 'prime',
      providerLabel: 'prime video',
      isTop10: false
    },
    {
      title: 'Divertida Mente 2',
      description: 'Riley enfrenta novos desafios da adolescência enquanto emoções inéditas, como a Ansiedade, aparecem e bagunçam sua mente.',
      duration: '1:30h',
      age: 'Somente +18',
      approval: '67%',
      provider: 'netflix',
      providerLabel: 'Netflix',
      isTop10: false
    },
    {
      title: 'A Pequena Sereia',
      description: 'Ariel, uma jovem sereia, faz um pacto arriscado para viver no mundo humano e descobrir o amor verdadeiro.',
      duration: '1:30h',
      age: 'Livre',
      approval: '80%',
      provider: 'netflix',
      providerLabel: 'Disney+',
      isTop10: false
    },
    {
      title: 'Wonka',
      description: 'A fantástica origem de Willy Wonka, o icônico fabricante de chocolates, mostrando sua jornada mágica até se tornar o dono da Fantástica Fábrica de Chocolate.',
      duration: '1:30h',
      age: 'Livre',
      approval: '25%',
      provider: 'prime',
      providerLabel: 'prime video',
      isTop10: false
    },
    {
      title: 'Elementos',
      description: 'Ember, uma jovem de fogo, e Wade, um rapaz de água, desafiam as diferenças de seus mundos para provar que podem coexistir.',
      duration: '1:30h',
      age: 'Livre',
      approval: '78%',
      provider: 'netflix',
      providerLabel: 'Disney+',
      isTop10: false
    },
    {
      title: 'Lightyear',
      description: 'Buzz Lightyear embarca em uma missão espacial para descobrir o que há além do universo conhecido.',
      duration: '1:30h',
      age: 'Livre',
      approval: '45%',
      provider: 'netflix',
      providerLabel: 'Disney+',
      isTop10: false
    }
  ];
}
