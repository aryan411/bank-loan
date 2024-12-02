import { HttpInterceptorFn } from '@angular/common/http';
import { tap, catchError, throwError } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  debugger;
  const clonedReq = req.clone({
    setHeaders: {
      'Access-Control-Allow-origin': '*',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  return next(clonedReq).pipe(
    tap((event) => {
      // Handle successful responses or request logging here if needed
      console.log('Request/Response succeeded:', req.url, event);
    }),
    catchError((error) => {
      // Global error handling logic
      console.error('Request failed:', req.url, error);

      // You can also show a user notification, redirect, or handle specific status codes
      if (error.status === 401) {
        console.error('Unauthorized request - redirecting to login');
        // Perform actions like logging out or redirecting to a login page
      } else if (error.status === 500) {
        console.error('Server error occurred');
        // Show a user-friendly message or alert
      }

      // Rethrow the error for further handling if needed
      return throwError(() => new Error(error.message || 'An error occurred'));
    })
  );
};
