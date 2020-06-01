import {Exel} from '@/components/exel/Exel';
import './scss/index.scss';
import {Header} from '@/components/header/Header';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {Formula} from '@/components/formula/formula';
import {Table} from '@/components/table/Table';

const exel = new Exel('#app', {
  components: [Header, Toolbar, Formula, Table]
});

exel.render();
