import { HiOutlineChartPie } from 'react-icons/hi2';
import { AiOutlineHome } from 'react-icons/ai';
import { PiAirplaneTakeoffLight } from 'react-icons/pi';
import { TfiWallet } from 'react-icons/tfi';
import { TbReportSearch } from 'react-icons/tb';
import { FiSettings } from 'react-icons/fi';

export const activeUsersData = {
  users: [
    {
      id: 1,
      image: '/images/user-one.jpg',
    },
    {
      id: 2,
      image: '/images/user-one.jpg',
    },
    {
      id: 3,
      image: '/images/user-one.jpg',
    },
    {
      id: 4,
      image: '/images/user-one.jpg',
    },
  ],

  totalUsers: '70+',
};

export const sideBarLink = [
  {
    id: 1,
    link: '/',
    text: 'Dashboard',
    icon: <AiOutlineHome />,
  },
  {
    id: 1,
    link: '/flight',
    text: 'Flight',
    icon: <PiAirplaneTakeoffLight />,
  },
  {
    id: 1,
    link: '/wallet',
    text: 'Wallet',
    icon: <TfiWallet />,
  },
  {
    id: 1,
    link: '/report',
    text: 'Report',
    icon: <TbReportSearch />,
  },
  {
    id: 1,
    link: '/statistic',
    text: 'Statistics',
    icon: <HiOutlineChartPie />,
  },
  {
    id: 1,
    link: '/setting',
    text: 'Settings',
    icon: <FiSettings />,
  },
];
