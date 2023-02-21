function solution(numlist, n) {
    return numlist.sort((a,b) => {
        const [aRan, bRan] = [Math.abs(a-n), Math.abs(b-n)]
        if(aRan === bRan) return b-a
        return aRan-bRan
    })
}