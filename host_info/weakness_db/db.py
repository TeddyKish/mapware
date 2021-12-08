from enum import Enum
from collections import defaultdict


class OS_TYPE(Enum):
    NONE    = None
    WINDOWS = "windows"
    LINUX   = "linux"


class Meta(type):
    def __new__(mcls, name, bases, dict):
        dict['_data'] = defaultdict(default_factory=list)

        return super().__new__(mcls, name, bases, dict)

    def __getitem__(self, item):
        port, os_type = item

        return self._data.get((port, os_type.value), []) + self._data.get((0, os_type.value), []) + \
               self._data.get((port, OS_TYPE.NONE.value), []) + self._data.get((0, OS_TYPE.NONE.value), [])


class DB(metaclass=Meta):
    @classmethod
    def add(cls, port: int = 0, os_type: OS_TYPE = OS_TYPE.NONE):
        def _(callable):
            if not cls._data.get((port, os_type.value), None):
                cls._data[(port, os_type.value)] = []

            cls._data[(port, os_type.value)].append(callable)

        return _
