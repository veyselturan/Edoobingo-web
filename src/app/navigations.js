export const navigations = [
  { name: 'Dashboard', path: '/dashboard/default', icon: 'dashboard' },
  { label: 'SAYFALAR', type: 'label' },
   {
    name: 'Tanımlar',
    icon: 'launch',
    children: [
      { name: 'Video Kategori Tanımı', iconText: 'SI', path: '/session/signin' },
    ]
  },
  {
    name: 'Kullanıcı İşlemleri',
    icon: 'security',
    children: [
      { name: 'Kullanıcı Oluştur', iconText: 'SI', path: '/session/signin' },
      { name: 'Kullanıcı Düzenle', iconText: 'SU', path: '/session/signup' },
      { name: 'Kullanıcı Videoları', iconText: 'FP', path: '/session/forgot-password' },
      { name: 'Video Atama', iconText: '404', path: '/session/404' }
    ]
  },
  {
    name: 'Video Eğitim',
    icon: 'security',
    children: [
      { name: 'Video Ekle', iconText: 'SI', path: '/pages/videoadd' },
      { name: 'Video Listele', iconText: 'SU', path: '/session/signup' },
      { name: 'Video Düzenle', iconText: 'FP', path: '/session/forgot-password' },
      { name: 'Toplu Video Atama', iconText: '404', path: '/session/404' }
    ]
  },
  {
    name: 'Anket',
    icon: 'security',
    children: [
      { name: 'Anket Oluştur', iconText: 'SI', path: '/session/signin' },
      { name: 'Anket Düzenle', iconText: 'SU', path: '/session/signup' },
      { name: 'Tüm Anketler', iconText: 'SU', path: '/session/signup' },
      { name: 'Anket Sonuçları', iconText: 'FP', path: '/session/forgot-password' },
    ]
  },
  {
    name: 'Etkinlik',
    icon: 'security',
    children: [
      { name: 'Etkinlik Oluştur', iconText: 'SI', path: '/session/signin' },
      { name: 'Etkinlik Düzenle', iconText: 'SU', path: '/session/signup' },
      { name: 'Tüm Etkinlikler', iconText: 'FP', path: '/session/forgot-password' },
    ]
  },
  {
    name: 'Session/Auth',
    icon: 'security',
    children: [
      { name: 'Sign in', iconText: 'SI', path: '/session/signin' },
      { name: 'Sign up', iconText: 'SU', path: '/session/signup' },
      { name: 'Forgot Password', iconText: 'FP', path: '/session/forgot-password' },
      { name: 'Error', iconText: '404', path: '/session/404' }
    ]
  },

  { label: 'KULLANICI SAYFALARI', type: 'label' },
  {
    name: 'Eğitimler',
    icon: 'launch',
    type: 'extLink',
    path: 'http://demos.ui-lib.com/matx-react-doc/'
  },
   {
    name: 'Kütüphanem',
    icon: 'launch',
    type: 'extLink',
    path: 'http://demos.ui-lib.com/matx-react-doc/'
  },
   {
    name: 'Etkinlikler',
    icon: 'launch',
    type: 'extLink',
    path: 'http://demos.ui-lib.com/matx-react-doc/'
  },
   {
    name: 'Anketler',
    icon: 'launch',
    type: 'extLink',
    path: 'http://demos.ui-lib.com/matx-react-doc/'
  },
   {
    name: 'Profil Bilgileri',
    icon: 'launch',
    type: 'extLink',
    path: 'http://demos.ui-lib.com/matx-react-doc/'
  },
   {
    name: 'Şifre Değiştir',
    icon: 'launch',
    type: 'extLink',
    path: 'http://demos.ui-lib.com/matx-react-doc/'
  },
  

  { label: 'Components', type: 'label' },
  {
    name: 'Components',
    icon: 'favorite',
    badge: { value: '30+', color: 'secondary' },
    children: [
      { name: 'Auto Complete', path: '/material/autocomplete', iconText: 'A' },
      { name: 'Buttons', path: '/material/buttons', iconText: 'B' },
      { name: 'Checkbox', path: '/material/checkbox', iconText: 'C' },
      { name: 'Dialog', path: '/material/dialog', iconText: 'D' },
      { name: 'Expansion Panel', path: '/material/expansion-panel', iconText: 'E' },
      { name: 'Form', path: '/material/form', iconText: 'F' },
      { name: 'Icons', path: '/material/icons', iconText: 'I' },
      { name: 'Menu', path: '/material/menu', iconText: 'M' },
      { name: 'Progress', path: '/material/progress', iconText: 'P' },
      { name: 'Radio', path: '/material/radio', iconText: 'R' },
      { name: 'Switch', path: '/material/switch', iconText: 'S' },
      { name: 'Slider', path: '/material/slider', iconText: 'S' },
      { name: 'Snackbar', path: '/material/snackbar', iconText: 'S' },
      { name: 'Table', path: '/material/table', iconText: 'T' }
    ]
  },
  {
    name: 'Charts',
    icon: 'trending_up',
    children: [{ name: 'Echarts', path: '/charts/echarts', iconText: 'E' }]
  },
  {
    name: 'Documentation',
    icon: 'launch',
    type: 'extLink',
    path: 'http://demos.ui-lib.com/matx-react-doc/'
  }
];
