def prefix_table(pattern=[], prefix=[], n=0):
    prefix[0] = 0
    len = 0
    i = 1
    while(i < n):
        if(pattern[i] == pattern[len]):
            len += 1
            prefix[i] = len
            i += 1
        else:
            if len > 0:
                len = prefix[len - 1] 
                print('i' + str(i))
                print(len)
            else:
                prefix[i] = len
                i += 1

def move_prefix_table(prefix=[],n = 0):
    i = n - 1
    while(i > 0):
        prefix[i] = prefix[i - 1]
        i -= 1
    prefix[0] = -1


def kmp_search(text=[], pattern=[]):
    n = len(pattern)
    m = len(text)
    prefix = [0] * n
    prefix_table(pattern, prefix, n)
    move_prefix_table(prefix, n)
    #  text[i]  len(text) = m
    #  pattern[j] len(pattern) = n
    i = 0
    j = 0
    while(i < m):
        if j == n-1 and pattern[n - 1] == text[i]:
            j = prefix[j]
            return True
        if(text[i] == pattern[j]):
            i += 1
            j += 1
        else:
            j = prefix[j]
            if j == -1:
                i += 1
                j += 1

p = list('ABABCABAA')
n = len(p)
prefix = [0] * n

# print(p)
prefix_table(p, prefix, n)

# # for i in prefix:
# #     print(i)

print(prefix)
# move_prefix_table(prefix, n)
# print(prefix)