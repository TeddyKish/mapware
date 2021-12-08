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
        service, os_type = item

        return self._data.get((service, os_type.value), []) + self._data.get((None, os_type.value), []) + \
               self._data.get((service, OS_TYPE.NONE.value), []) + self._data.get((None, OS_TYPE.NONE.value), [])


class DB(metaclass=Meta):
    @classmethod
    def add(cls, service: str = None, os_type: OS_TYPE = OS_TYPE.NONE):
        def _(callable):
            if not cls._data.get((service, os_type.value), None):
                cls._data[(service, os_type.value)] = []

            cls._data[(service, os_type.value)].append(callable)

        return _
