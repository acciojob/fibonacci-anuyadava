def fibonacci(num):
    if num == 0:
        return 0
    elif num == 1:
        return 1
    
    # Initialize the first two Fibonacci numbers
    a, b = 0, 1
    
    # Compute Fibonacci number from 2 up to num
    for _ in range(2, num + 1):
        a, b = b, a + b
    
    return b

