import kupon1 from '../asset/kupon1.png'
import kupon2 from '../asset/kupon2.png'
import kupon3 from '../asset/kupon3.png'
import jam from '../asset/jam.png'
import uang from '../asset/uang.png'
import kupondetail from '../asset/kupondetail.png'
import kupondetail2 from '../asset/kupondetail2.png'
import headeimg from '../asset/headerimg.png'
import setting from '../asset/settings.png'
import levelicons from '../asset/Levelicon.png'
import arrow from '../asset/arrow.png'
import poin from '../asset/poin.png'
import referal from '../asset/Referal.png'
import Bag from '../asset/Bag.png'
import Dikirim from '../asset/Dikirim.png'
import Money from '../asset/Money.png'
import Garasiku from '../asset/garasiku.png'
import Proses from '../asset/Proses.png'
const Data = [
    {
        key: 1,
        image: kupon1,
        imagedetail: kupondetail,
        bullet: '\u2B24',
        title: 'September Xtra',
        berlaku: '30 September 2021',
        iconjam: jam,
        iconuang: uang,
        min_transaksi: 'Rp.1.000.000',
        code: 'SPEKTA20',
        sk: {
            type1: '\u2B24 Type voucher FIX',
        }
    },
    {
        key: 2,
        image: kupon2,
        imagedetail: kupon2,
        berlaku: 'Diskon tambahan Rp.10.000 dengan minimal Rp.150.00',
        title: 'Pesta akhir tahun',
        bullet: '\u2B24',
        berlaku: '17 Oktober 2021',
        iconjam: jam,
        iconuang: uang,
        min_transaksi: 'Rp.1.500.000',
        code: 'NEW220',
        sk: {
            type1: '\u2B24 Type voucher FIX',
            type2: '\u2B24 Voucher hanya bisa digunakan dalam periode tertentu',
        }
    },
    {
        key: 3,
        image: kupon3,
        imagedetail: kupondetail2,
        berlaku: '20 Maret 2021',
        bullet: '\u2B24',
        title: 'Diskon tambahan Rp.10.000 dengan minimal pembelian Rp.150.000',
        iconjam: jam,
        iconuang: uang,
        min_transaksi: 'Rp.300.000',
        code: 'GREGET30',
        sk: {
            type1: '\u2B24 Ajak teman Anda belanja di AstraOtoShop.com dan dapatkan bonus referal 10% dari nilai transaksi teman anda hingga 50.000 point per hari',
            type2: '\u2B24 Teman Abda akan mendapatkan bonus sebesar 25.000 poin dan cashback 5% hingga 25.00 poin per transaksi',
            type3: '\u2B24 Bagikan ke grup WhatsApp atau Social Media Anda untuk kesempatan poin yang lebih besar',
        }
    }, 
    {
        key: 4,
        referals : referal,
        headerimg :headeimg,
        arrows : arrow,
        poins: poin,
        bag: Bag,
        money: Money,
        dikirim: Dikirim,
        settings: setting,
        levelicon: levelicons,
        proses: Proses,
        garasiku: Garasiku
    }
]
export { Data }