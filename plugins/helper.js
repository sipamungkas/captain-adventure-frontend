export default ({ app }, inject) => {
  inject('getMap', (arr) => {
    const map = arr.filter((item) => item.category === 'map')
    let value = null
    if (map.length > 0 && map[0].value.includes('iframe')) {
      value = map[0].value.split(' ')
      value = value[1].substr(4).replace(/"/g, '')
    }

    return value
  })
  inject('noMap', (arr) => {
    const contacts = arr.filter(
      (item) => !['address', 'map'].includes(item.category)
    )

    return contacts
  })
  inject('getAddress', (arr) => {
    const adress = arr.filter((item) => item.category === 'address')
    let value = null
    if (adress.length > 0) {
      value = adress[0].value
    }

    return value
  })
}
