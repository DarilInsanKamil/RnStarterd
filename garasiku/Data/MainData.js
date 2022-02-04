import aki from '../asset/aki2.png';
import ban from '../asset/ban2.png';
import rem from '../asset/rem.png';
import battery from '../asset/Imglacak1.png';
import airfilter from '../asset/Imglacak2.png';
import filter from '../asset/filter.png';
import cylinder from '../asset/cylinder.png';
import window from '../asset/window.png';
import platkopling from '../asset/platkopling.jpg';
import mataharikopling from '../asset/mataharikopling.jpg';
import location from '../asset/location.png'

const MainData = [
    {
        id: 1,
        no_pesanan: 2000172775,
        pesanan: 'Belum dibayar',
        tanggal: "6 Maret 2021, 15:45 WIB",
        ban: ban,
        rem: rem,
        total_harga: 'Rp. 1.125.000',
        lacak: 'Lihat Nomor VA',
        back_color: 'rgba(251, 236, 239, 1)',
        color_text: '#0033A0',
        title: undefined,
    },
    {
        id: 2,
        no_pesanan: 2000172775,
        tanggal: "6 Maret 2021, 15:45 WIB",
        pesanan: 'Diproses',
        airfilter: airfilter,
        battery: battery,
        total_harga: 'Rp. 1.125.000',
        lacak: undefined,
        back_color: 'rgba(255, 247, 194, 1)',
        title: undefined,
        color: 'rgba(221, 53, 86, 1)',
        color_text: '#0033A0'
    },
    {
        id: 3,
        no_pesanan: 2000172775,
        tanggal: "6 Maret 2021, 15:45 WIB",
        pesanan: 'Dikemas',
        airfilter: airfilter,
        battery: battery,
        total_harga: 'Rp. 1.125.000',
        lacak: 'Lacak Pesanan',
        back_color: 'rgba(255, 247, 194, 1)',
        color: 'rgba(102, 85, 0, 1)',
        title: undefined,
        color_text: '#0033A0'
    },
    {
        id: 4,
        no_pesanan: 2000172775,
        tanggal: "6 Maret 2021, 15:45 WIB",
        pesanan: 'Dikirim',
        filter: filter,
        total_harga: 'Rp. 1.125.000',
        lacak: 'Lacak Pesanan',
        back_color: 'rgba(219, 241, 229, 1)',
        color: 'rgba(16, 98, 54, 1)',
        title: undefined,
        color_text: '#0033A0'
    },
    {
        id: 5,
        no_pesanan: 2000172775,
        tanggal: "6 Maret 2021, 15:45 WIB",
        pesanan: 'Selesai',
        filter: filter,
        window: window,
        aki: aki,
        cylinder: cylinder,
        total_harga: 'Rp. 1.125.000',
        lacak: 'Pesan Kembali',
        back_color: 'rgba(235, 241, 255, 1)',
        color: 'rgba(0, 51, 160, 1)',
        lacak_color: 'rgba(0, 51, 160, 1)',
        title: undefined,
        color_text: '#fff'
    },
    {
        id: 6,
        no_pesanan: 2000172775,
        tanggal: "6 Maret 2021, 15:45 WIB",
        pesanan: 'Booking',
        filter: filter,
        window: window,
        aki: aki,
        cylinder: cylinder,
        total_harga: 'Rp. 1.125.000',
        lacak: 'Lacak Pesanan',
        back_color: 'rgba(255, 223, 195, 1)',
        color: 'rgba(235, 87, 87, 1)',
        lacak_color: 'rgba(0, 51, 160, 1)',
        title: undefined,
        color_text: '#fff'
    },
    {
        id: 7,
        no_pesanan: 2000172775,
        tanggal: "6 Maret 2021, 15:45 WIB",
        pesanan: 'Batal',
        filter: filter,
        window: window,
        color_text: '#fff',
        aki: aki,
        cylinder: cylinder,
        total_harga: 'Rp. 1.125.000',
        lacak: 'Pesan Kembali',
        back_color: 'rgba(251, 236, 239, 1)',
        color: 'rgba(221, 53, 86, 1)',
        title: undefined,
        lacak_color: 'rgba(0, 51, 160, 1)'
    },
    {
        id: 8,
        no_pesanan: 2000172775,
        tanggal: "6 Maret 2021, 15:45 WIB",
        color_text: '#fff',
        jumlah: '1 barang',
        pesanan: 'Dikemas',
        platkopling: platkopling,
        mataharikopling: mataharikopling,
        title: 'Plat Kopling ASPIRA untuk Toyota Kijang 7K',
        title2: 'Matahari Kopling (Dekrup) ASPIRA untuk Toyota Kijang 7K',
        harga: 'Rp.205.200',
        back_color: 'rgba(251, 236, 239, 1)',
        color_text: '#0033A0',
        harga2: 'Rp.403.750',
        total_harga: 'Rp.608.900',
        alamat: {
            nama: 'Astri Otowati',
            main: 'Rumah',
            no_telp: '08123456789',
            email: 'astri.otowati@gmail.com',
            location: location,
            prov: 'DKI Jakarta',
            kab: 'Jakarta Selatan',
            alamat: 'Jl. Jenderal Basuki Rachmat No.8-12, Kedungdoro, Kec. Tegalsari, Kota SBY, Jawa Timur 60261',
            notes: 'Sebelah warung Indomie',
            kec: 'Kebayoran Baru, 12170'
        }
    },
    
]

export { MainData }