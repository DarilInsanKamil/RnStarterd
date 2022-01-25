import kupon3 from '../asset/kupon3.png'
import kupon4 from '../asset/kupon4.png'
import kupon1 from '../asset/kupon1.png'
import iconsjam from '../asset/jam.png'

import headeimg from '../asset/headerimg.png'
import setting from '../asset/settings.png'
import levelicons from '../asset/Levelicon.png'
import arrow from '../asset/arrow.png'
import arrow2 from '../asset/arrow2.png'
import poin from '../asset/poin.png'
import referal from '../asset/Referal.png'
import Bag from '../asset/Bag.png'
import Dikirim from '../asset/Dikirim.png'
import Money from '../asset/Money.png'
import Garasiku from '../asset/garasiku.png'
import Proses from '../asset/Proses.png'
import Voucher from '../asset/voucher.png'
import Location from '../asset/location.png'
import Chevron from '../asset/Chevron.png'

const DataDash = [
    {
        key: 1,
        image: kupon4,
        title: "Tambahan diskon untuk Aki + pemasangan Shop & Drive",
        jam: iconsjam,
        berlaku: "Berlaku hingga 24 Mar 2021"
    },
    {
        key: 2,
        image: kupon3,
        title: "Hari ini diskon 50% untuk min pembelanjaan Rp.500.000",
        jam: iconsjam,
        berlaku: "Berlaku hingga 24 Mar 2021"
    },
    {
        key: 3,
        image: kupon1,
        title: "Hanya bulan ini kamu dapat potongan 20%",
        jam: iconsjam,
        berlaku: "Berlaku hingga 24 Sep 2021"
    },
    {
        Icons: {
            key: 4,
            referals: referal,
            headerimg: headeimg,
            arrows: arrow,
            arrows2: arrow2,
            poins: poin,
            bag: Bag,
            money: Money,
            dikirim: Dikirim,
            settings: setting,
            levelicon: levelicons,
            proses: Proses,
            garasiku: Garasiku,
            vouchers: Voucher,
            locations: Location,
            chevrons: Chevron,
            iconjam: iconsjam
        }
    }

]

export { DataDash }