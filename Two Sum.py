class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        ret = []
        Listy = {}

        for i, num in enumerate(nums):
            if (target-num) in Listy: 
                ret.append(i)
                ret.append(Listy[target-num])

            Listy[num] = i
        return ret