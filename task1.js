
let health = Number(prompt('Введите число параметра "здоровье" для персонажа'))
if (health <= 0 || isNaN(health)){
    console.log(health)
    alert('Параметр "здоровье" должен быть больше нуля!')
} else {
    alert(`Параметр "здоровье" равен ${health}`)
}