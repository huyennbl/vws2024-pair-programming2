import DistanceCalculator from './DistanceCalculator'
let calculator
describe('DistanceCalculator', () => {
  beforeEach(() => {
    calculator = new DistanceCalculator()
  })
  describe('getMyLocation()', () => {
    it('should return [0,0]', () => {
      expect(calculator.getMyLocation()).toEqual([0, 0])
    })
  })
  describe('getDistance()', () => {
    it('should return 5 when TargetLocation = [3,4]', () => {
      expect(calculator.getDistance([3, 4])).toEqual(5)
    })
    it('should return 10 when TargetLocation = [8,6]', () => {
      expect(calculator.getDistance([8, 6])).toEqual(10)
    })
  })
})
