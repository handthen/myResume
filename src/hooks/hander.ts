interface Hander {
    handerRequest?(params: number): unknown
    setNext?: (hander: Hander) => void
    nextHander: Hander | null
}

abstract class hander {
    nextHander: Hander | null = null

    setNext(hander: Hander) {
        this.nextHander = hander
    }
    abstract handerRequest(params: number): void

}

class handerItem1 extends hander {
    handerRequest(params: number) {
        params > 10 ? console.log('ok') : this.nextHander?.handerRequest!(params)
    }
}

class handerItem2 extends hander {
    handerRequest(params: number) {
        params = ++params
        this.nextHander!.handerRequest!(params)
    }
}

const hd1 = new handerItem1()
const hd2 = new handerItem2()
hd1.setNext(hd2)
hd2.setNext(hd1)
console.log(hd1.nextHander === hd2, hd2.nextHander === hd1)
hd1.handerRequest(1)

export default hander
