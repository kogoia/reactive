// // API ver.1
// new Observable(domElement, eventname).subscribe(new Observer(output));

function Observer(onNext, onError, onComplete) {
    return {
        onNext: onNext,
        onError: onError,
        onComplete: onComplete
    }
}

function Observable(domElement, eventName) {
    let _domElement = domElement;
    let _eventName = eventName;

    function addEventOnDomElement(callback) {
         let handler = _domElement.addEventListener(eventName, callback);
         return handler;
    } 


    return {
        subscribe: function(observer) {
            let handler = addEventOnDomElement((e) => {
                observer.onNext(e);
            })

            return {
                dispose: function() {
                    _domElement.removeListener(handler);
                }
            }
        }
    }
}
