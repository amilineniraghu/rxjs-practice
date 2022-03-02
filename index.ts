import './style.css';

import { of, map, Observable, from, tap } from 'rxjs';

of('World')
  .pipe(map((name) => `Hello, ${name}!`))
  .subscribe(console.log);

from([1,2,3])
  .pipe(
    tap(x => console.log(x))
  ).subscribe( 
    (data) => console.log(data),
    (error) => console.log(error),
    ()=> console.log('complete')
  )

  const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });
   
  console.log('just before subscribe');
  observable.subscribe({
    next(x) { console.log('got value ' + x); },
    error(err) { console.error('something wrong occurred: ' + err); },
    complete() { console.log('done'); }
  });
  console.log('just after subscribe');
