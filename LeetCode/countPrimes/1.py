
#   寻找素数（又叫质数，一个大于1的自然数，除了1和它自身外，不能被其他自然数整除的数叫做质数）

def countPrimes(n):
    isPrimes = [True] * n

    # print(isPrimes)
    i = 2

    while((i * i) < n):
        print('i:' + str(i))

        if isPrimes[i]:
            j = (i * i)
            while(j < n):
                print('j:' + str(j))
                isPrimes[j] = False
                j += i

        i += 1

    print(isPrimes)


countPrimes(10)
