function handlerType(target) {
    target.__TYPE__ = 'Some Kind';
}

@handlerType
class Handler {
    handle() {
        console.log('handle');
    }
}

console.log(Handler.__TYPE__);