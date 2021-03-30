import numpy as np

a = np.array([-2, 2])
b = np.array([2, 2])

ab_1 = np.inner(a, b)
ab_2 = np.linalg.norm(a) * np.linalg.norm(b) * np.cos(np.pi/2)

print(ab_1)
print(ab_2)