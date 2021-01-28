import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Gerenciar Viagens'
  },
  {
    name: 'Viagens',
    url: '/viagem',
    icon: 'icon-drop'
  },
  {
    name: 'Pacotes de Viagens',
    url: '/theme/typography',
    icon: 'icon-pencil'
  },
  {
    title: true,
    name: 'Gerenciar Vendas'
  },
  {
    name: 'Reservas',
    url: '/base',
    icon: 'icon-puzzle'
  },
  {
    name: 'Relatórios',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Relatório de Vendas',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Relatório de Viagens',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      },
    ]
  },
  {
    name: 'Download App',
    url: 'http://coreui.io/angular/',
    icon: 'icon-cloud-download',
    class: 'mt-auto',
    variant: 'success',
    attributes: { target: '_blank', rel: 'noopener' }
  },
  {
    name: 'Visão do Cliente',
    url: 'http://coreui.io/pro/angular/',
    icon: 'icon-layers',
    variant: 'danger',
    attributes: { target: '_blank', rel: 'noopener' }
  }
];
