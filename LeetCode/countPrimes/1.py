
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
    # count = 0
    # k = 2
    # while(k < n):
    #     if isPrimes[k]:
    #         count += 1
    #     k += 1
       
    # print(count)


countPrimes(10)
