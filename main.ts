input.onButtonPressed(Button.A, function () {
    開槍 = 0
    玩家.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    if (移動 == 0) {
        移動 = 1
        擊殺數 = 0
        開槍 = 0
        game.resume()
        敵人.set(LedSpriteProperty.X, randint(0, 4))
        敵人.set(LedSpriteProperty.Y, 0)
        敵人.set(LedSpriteProperty.Brightness, 200)
    } else {
        開槍 = 1
    }
})
input.onButtonPressed(Button.B, function () {
    開槍 = 0
    玩家.change(LedSpriteProperty.X, 1)
})
let 擊殺數 = 0
let 開槍 = 0
let 敵人: game.LedSprite = null
let 玩家: game.LedSprite = null
let 移動 = 0
移動 = 0
玩家 = game.createSprite(2, 4)
let 射擊 = game.createSprite(0, 4)
射擊.set(LedSpriteProperty.Brightness, 0)
敵人 = game.createSprite(2, 0)
敵人.set(LedSpriteProperty.Brightness, 0)
basic.forever(function () {
    if (開槍 == 1) {
        開槍 = 0
        射擊.set(LedSpriteProperty.X, 玩家.get(LedSpriteProperty.X))
        射擊.set(LedSpriteProperty.Brightness, 45)
        for (let index = 0; index < 4; index++) {
            射擊.change(LedSpriteProperty.Y, -1)
            basic.pause(100)
        }
    }
    射擊.set(LedSpriteProperty.Brightness, 0)
    射擊.set(LedSpriteProperty.Y, 4)
})
basic.forever(function () {
    if (移動 == 1) {
        if (射擊.isTouching(敵人)) {
            擊殺數 += 1
            敵人.set(LedSpriteProperty.X, randint(0, 4))
            敵人.set(LedSpriteProperty.Y, 0)
        }
    }
})
basic.forever(function () {
    if (移動 == 1) {
        敵人.change(LedSpriteProperty.Y, 1)
        if (敵人.get(LedSpriteProperty.Y) == 4) {
            移動 = 0
            game.pause()
            while (移動 == 0) {
                basic.showNumber(擊殺數)
            }
        }
        basic.pause(600)
    }
})
